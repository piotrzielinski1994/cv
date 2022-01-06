import { src, task, watch, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import nunjucks from 'gulp-nunjucks-render';
import gulpData from 'gulp-data';
import del from 'del';
import sass from 'sass';
import browserSync, { BrowserSyncInstance, Options } from 'browser-sync';
import htmlToPdf from 'html-pdf-node';
import { Config, Task } from './types';

const config: Config = {
  port: 8000,
  path: {
    src: {
      base: './src',
      templates: './src/*.njk',
      styles: './src/styles/*.scss',
      data: './data/data.ts',
    },
    dist: {
      base: './dist',
      styles: 'styles.css',
      pdf: 'cv.pdf',
    },
  },
};

task(Task.DEFAULT, () => {
  watch(config.path.src.styles, { ignoreInitial: false }, compileStyles);
  watch(
    [config.path.src.templates, config.path.src.data],
    { ignoreInitial: false },
    compileTemplates
  );

  initServer();
});

task(Task.PDF, (done) => {
  const notWatchServerPort = config.port + 1;

  compileStyles();
  compileTemplates();
  initServer(
    () => {
      generatePdf(done, notWatchServerPort);
    },
    {
      port: notWatchServerPort,
      open: false,
    }
  );
});

task(Task.CLEAN, () => {
  return del([config.path.dist.base]);
});

const initServer = (
  onInitialized?: (err: Error, bs: BrowserSyncInstance) => any,
  options?: Options
) => {
  browserSync.init(
    {
      server: config.path.dist.base,
      ...options,
    },
    onInitialized
  );

  browserSync.create;
};

const compileTemplates = async () => {
  const { default: data } = await import('./data/data');
  console.log('@@@ data | ', data.heading);
  return src(config.path.src.templates)
    .pipe(gulpData(data))
    .pipe(
      nunjucks({
        path: config.path.src.base,
      })
    )
    .pipe(dest(config.path.dist.base))
    .pipe(browserSync.stream());
};

const compileStyles = () => {
  return src(config.path.src.styles)
    .pipe(gulpSass(sass)())
    .pipe(concat(config.path.dist.styles))
    .pipe(dest(config.path.dist.base))
    .pipe(browserSync.stream());
};

const generatePdf = (doneFn: Function, port: number) => {
  const { base: dist, pdf } = config.path.dist;
  const file = { url: `http://localhost:${port}` };
  const options = {
    format: 'A4',
    path: `${dist}/${pdf}`,
  };

  htmlToPdf.generatePdf(file, options).then(() => {
    browserSync.exit();
    console.log('The PDF has been created');
    doneFn();
  });
};

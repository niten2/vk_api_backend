// import "babel-polyfill";

import BPromise from 'bluebird';

// configure bluebird to make sure we know about unhandled rejections
BPromise.onPossiblyUnhandledRejection((e) => { throw e });

BPromise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
});


import React from 'react'
import 'config'
import "../stylesheets/index.scss"
import router from 'lib/router'
import AppRoutes from 'lib/routes'

router(AppRoutes)


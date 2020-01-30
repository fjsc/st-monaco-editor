/*
 * © 2017 Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software – including all its source code – contains proprietary
 * information of Stratio Big Data Inc., Sucursal en España and
 * may not be revealed, sold, transferred, modified, distributed or
 * otherwise made available, licensed or sublicensed to third parties;
 * nor reverse engineered, disassembled or decompiled, without express
 * written authorization from Stratio Big Data Inc., Sucursal en España.
 */

const fs = require('fs');
const path = require('path');

const targetPackagePath = path.join(__dirname, './../projects/st-editor/package.json');
const version = require(path.join(__dirname, './../package.json')).version;
const destPkg = require(targetPackagePath);

destPkg.version = version;
fs.writeFileSync(targetPackagePath, JSON.stringify(destPkg, null, 2));

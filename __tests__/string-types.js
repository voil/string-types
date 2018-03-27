/*
 * =============================================================================
 * Project: string-types
 * Created Date: 2018-03-27, 13:42:33
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-27, 13:57:53
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

import assert from "assert";
import StringTypes from "../src";

describe('string-types', function () {
  it('simple one argument test', function () {
    assert.equal(StringTypes('test'), 'test');
  });

  it('simple two argument test', function () {
    assert.equal(StringTypes('test', 'test2'), 'test test2');
  });  

  it('join array to one string', function () {
    assert.equal(StringTypes(['test', 'test2']), 'test test2');
  }); 

  it('join object to string', function () {
    assert.equal(StringTypes({'test' :true, 'test2': true}), 'test test2');
  }); 

  it('join object first argument must pass', function () {
    assert.equal(StringTypes({'test' :true, 'test2': false}), 'test');
  }); 

  it('combination of array and simple argument', function () {
    assert.equal(StringTypes('test', ['test2']), 'test test2');
  }); 

  it('combination of array, object and simple argument', function () {
    assert.equal(StringTypes('test', ['test2'],  {'test3': true, 'test4': false}), 'test test2 test3');
  }); 

  it('combination of array, object and simple argument all true', function () {
    assert.equal(StringTypes('test', ['test2'],  {'test3': true, 'test4': true}), 'test test2 test3 test4');
  }); 
});
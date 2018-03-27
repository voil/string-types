/*
 * =============================================================================
 * Project: string-types
 * Created Date: 2018-03-27, 13:24:23
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-27, 13:47:35
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

/**
 * Convert data types to one string.
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export default function StringTypes(...params){
  let parsed = params.filter(item => typeof item !== 'undefined').map((item) => {
    switch(item.constructor.name) {
      case 'String': {
        return item;
      }
      case 'Number': {
        return item.toString();
      }
      case 'Object': {
        return Object.keys(item).filter(key => item[key]).join(' ');
      }
      case 'Array': {
        return StringTypes(...item);
      }
    }
  }).join(' ').trim();

  return parsed;
};
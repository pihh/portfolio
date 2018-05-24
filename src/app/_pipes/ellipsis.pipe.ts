/**
 * @name: Ellipsis pipe
 * @desc: One of the requirements of the project was, if a description is greater
     100 characters, it should be trimmed. I decided to trim it by 97 characters
     and add extra 3 dots ( so it keeps the original 100 asked ).
 */

import { Pipe, PipeTransform } from '@angular/core';
// import { CONSTANTS } from '../../constants';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string = '', args: string[] = []): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 50;
    const trail = args.length > 1 ? args[1] : '[read more...]';

    // -3 just to be 100 characters as defined and not 103
    return value.length > limit ? value.substring(0, limit - 5) + trail : value;
  }

}

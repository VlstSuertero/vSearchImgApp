import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../store/models';
import { PageEvent } from '@angular/material/paginator';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(values: Image[], options?: PageEvent): Image[] {
    if (!options) {
      return values
    }

    const offset = options.pageSize * options.pageIndex

    return values.slice(offset, offset + options.pageSize);
  }

}

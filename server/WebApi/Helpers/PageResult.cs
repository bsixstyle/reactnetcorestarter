using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Helpers
{
    public class PagedResult<T>
    {
        public class PagingInfo
        {
            public string Filter { get; set; }
            public int PageNo { get; set; }

            public int PageSize { get; set; }

            public int PageCount { get; set; }

            public int TotalRecordCount { get; set; }

        }
        public List<T> Data { get; private set; }

        public PagingInfo Paging { get; private set; }

        public PagedResult(IEnumerable<T> items,string filter, int pageNo, int pageSize, int totalRecordCount)
        {
            Data = new List<T>(items);
            Paging = new PagingInfo
            {
                Filter = filter,
                PageNo = pageNo,
                PageSize = pageSize,
                TotalRecordCount = totalRecordCount,
                PageCount = totalRecordCount > 0
                    ? (int)Math.Ceiling(totalRecordCount / (double)pageSize)
                    : 0
            };
        }
    }
}

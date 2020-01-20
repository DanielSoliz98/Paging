using Pagination.Model;
using Pagination.Paging;
using Pagination.ViewModel;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pagination.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly PagingExampleDBContext _db;

        public ContactRepository(PagingExampleDBContext db)
        {
            _db = db;
        }
        
        public async Task<PageListViewModel> GetContactsPageList(int pageNumber, int pageSize)
        {
            PageListViewModel result = null;

            await Task.Run(() =>
            {
                PageList<Contact> pageListResult = _db.Contact.OrderBy(c => c.FirstName).ToPageList(pageNumber, pageSize);
                result = new PageListViewModel
                {
                    Data = pageListResult,
                    Page = pageListResult.Page,
                    PageCount = pageListResult.PageCount,
                    PageSize = pageListResult.PageSize,
                    TotalCount = pageListResult.TotalCount,
                };
            });

            return result;
        }
    }
}

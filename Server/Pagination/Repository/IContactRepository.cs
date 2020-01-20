using Pagination.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pagination.Repository
{
    public interface IContactRepository
    {
        Task<PageListViewModel> GetContactsPageList(int pageNumber, int pageSize);
    }
}

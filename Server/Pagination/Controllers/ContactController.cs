using Microsoft.AspNetCore.Mvc;
using Pagination.Repository;
using System.Threading.Tasks;

namespace Pagination.Controllers
{
    [Route("contacts")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactRepository _repository;

        public ContactController(IContactRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetMoviesPageList(int pageNumber = 1, int pageSize = 5)
        {
            IActionResult response = Ok(await _repository.GetContactsPageList(pageNumber, pageSize));
            return response;
        }

    }
}
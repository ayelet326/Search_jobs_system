using JobSearch.Models;

namespace JobSearch.Interfaces
{
    public interface IJobfieldService
    {
        Task<List<JobField>?> GetAll();
        Task<bool> Delete(int id);
        Task<JobField?> GetById(int id);
        Task<bool> Add(JobField newJobfield);
    }
}
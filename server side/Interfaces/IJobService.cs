using JobSearch.Models;

namespace JobSearch.Interfaces
{
    public interface IJobService
    {
        Task<List<Job>?> GetAll();
        Task<bool> Delete(int id);
        Task<bool> Update(Job newJob);
        Task<Job?> GetById(int id);
        Task<bool> Add(Job newJob);
        void UpdateJobProperties(Job existingJob, Job newJob);
    }
}
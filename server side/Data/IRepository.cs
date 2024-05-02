using JobSearch.Models;

namespace JobSearch.Data
{
    public interface IRepository
    {
        Task<List<User>?> GetAllUsers();
        Task<bool> DeleteUser(User user);
        Task<User?> GetUserById(int id);
        Task<bool> AddUser(User newUser);
        Task<bool> UpdateUser(User user);

        Task<List<Job>?> GetAllJobs();
        Task<bool> DeleteJob(Job job);
        Task<Job?> GetJobById(int id);
        Task<bool> AddJob(Job newJob);
        Task<bool> UpdateJob(Job job);

        Task<List<JobField>?> GetAllJobFields();
        Task<bool> DeleteJobField(JobField jobField);
        Task<JobField?> GetJobFieldById(int id);
        Task<bool> AddJobField(JobField newJobField);

        Task SaveChanges();
    }
}
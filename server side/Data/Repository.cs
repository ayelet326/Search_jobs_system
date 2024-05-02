using JobSearch.Models;
using Microsoft.EntityFrameworkCore;

namespace JobSearch.Data
{
    public class Repository : IRepository
    {
        private readonly AppDbContext _context;
        public Repository(AppDbContext context)
        {
            _context = context;
        }
        //Get all users from the datbase
        public async Task<List<User>?> GetAllUsers()
        {
            List<User>? users = await _context.Users.ToListAsync();
            return users;
        }

        //Delete user from the datbase
        public async Task<bool> DeleteUser(User user)
        {
            _context.Users.Remove(user);
            await SaveChanges();
            return true;
        }

        //Get user by Id from the datbase
        public async Task<User?> GetUserById(int id)
        {
            User? user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == id);
            if (user == null) return null;
            return user;
        }
        //Add new user to the datbase
        public async Task<bool> AddUser(User newUser)
        {
            _context.Users.Add(newUser);
            await SaveChanges();
            return true;
        }
        //Update user in the datbase
        public async Task<bool> UpdateUser(User user)
        {
            _context.Users.Update(user);
            await SaveChanges();
            return true;

        }

        //Get all jobs from the datbase
        public async Task<List<Job>?> GetAllJobs()
        {
            List<Job>? jobs = await _context.Jobs.ToListAsync();
            return jobs;
        }

        //Delete job from the datbase
        public async Task<bool> DeleteJob(Job job)
        {
            _context.Jobs.Remove(job);
            await SaveChanges();
            return true;
        }

        //Get job by Id from the datbase
        public async Task<Job?> GetJobById(int id)
        {
            Job? job = await _context.Jobs.FirstOrDefaultAsync(u => u.JobId == id);
            if (job == null) return null;
            return job;
        }

        //Add new job to the datbase
        public async Task<bool> AddJob(Job newJob)
        {
            _context.Jobs.Add(newJob);
            await SaveChanges();
            return true;
        }

        //Update job in the datbase
        public async Task<bool> UpdateJob(Job job)
        {
            _context.Jobs.Update(job);
            await SaveChanges();
            return true;

        }

        //Get all job fields from the datbase
        public async Task<List<JobField>?> GetAllJobFields()
        {
            List<JobField>? jobFields = await _context.JobFields.ToListAsync();
            return jobFields;
        }

        //Delete job fields from the datbase
        public async Task<bool> DeleteJobField(JobField jobField)
        {
            _context.JobFields.Remove(jobField);
            await SaveChanges();
            return true;
        }

        //Get job field by Id from the datbase
        public async Task<JobField?> GetJobFieldById(int id)
        {
            JobField? jobField = await _context.JobFields.FirstOrDefaultAsync(u => u.JobFieldId == id);
            if (jobField == null) return null;
            return jobField;
        }

        //Add new job field to the datbase
        public async Task<bool> AddJobField(JobField newJobField)
        {
            _context.JobFields.Add(newJobField);
            await SaveChanges();
            return true;
        }

        //Update datbase
        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}
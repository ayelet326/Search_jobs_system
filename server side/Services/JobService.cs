using JobSearch.Data;
using JobSearch.Interfaces;
using JobSearch.Models;
using JobSearch.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSearch.Services
{
    public class JobService : IJobService
    {
        private readonly IRepository _repository;
        public JobService(IRepository repository)
        {
            _repository = repository;
        }

        //Get all jobs
        public async Task<List<Job>?> GetAll()
        {
            return await _repository.GetAllJobs();
        }

        //Get job by id
        public async Task<Job?> GetById(int id)
        {
            return await _repository.GetJobById(id);
        }

        // Add a new job to the database
        public async Task<bool> Add(Job? newJob)
        {
            if (newJob == null)
            {
                throw new ArgumentNullException(nameof(newJob), "Job object is null");
            }
            Job? existingJob = await GetById(newJob.JobId!);
            if (existingJob != null)
            {
                throw new ArgumentException("Job ID already exists");
            }
            try
            {
                ValidationService.IsValidJob(newJob);
                await _repository.AddJob(newJob);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error adding job: {ex.Message}");
            }
        }

        // Update an existing job in the database
        public async Task<bool> Update(Job? newJob)
        {
            if (newJob == null)
            {
                throw new ArgumentNullException(nameof(newJob), "Job object is null");
            }
            Job? existingJob = await GetById(newJob.JobId!);
            if (existingJob == null)
            {
                throw new ArgumentException("Job not found");
            }
            try
            {
                ValidationService.IsValidJob(newJob);
                UpdateJobProperties(existingJob, newJob);
                await _repository.UpdateJob(existingJob);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error updating job: {ex.Message}");
            }

        }

        // Delete a job from the database
        public async Task<bool> Delete(int id)
        {
            Job? job = await GetById(id);
            if (job == null)
            {
                throw new ArgumentException("Job not found");
            }
            try
            {
                await _repository.DeleteJob(job);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error deleting job with ID {id}: {ex.Message}");
            }
        }

        // Update job properties
        public void UpdateJobProperties(Job existingJob, Job newJob)
        {
            existingJob.JobName = newJob.JobName ?? existingJob.JobName;
            existingJob.JobFieldId = newJob.JobFieldId ?? existingJob.JobFieldId;
            existingJob.HouresScope = newJob.HouresScope ?? existingJob.HouresScope;
            existingJob.Area = newJob.Area ?? existingJob.Area;
            existingJob.Requirements = newJob.Requirements ?? existingJob.Requirements;
            existingJob.HomeWorking = newJob.HomeWorking ?? existingJob.HomeWorking;
        }
    }
}
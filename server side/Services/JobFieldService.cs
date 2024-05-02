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
    public class JobfieldService : IJobfieldService
    {
        private readonly IRepository _repository;
        public JobfieldService(IRepository repository)
        {
            _repository = repository;
        }

        //Get all jobfields
        public async Task<List<JobField>?> GetAll()
        {
            return await _repository.GetAllJobFields();
        }

        //Get jobfield by id
        public async Task<JobField?> GetById(int id)
        {
            return await _repository.GetJobFieldById(id);
        }

        // Add a new jobfield to the database
        public async Task<bool> Add(JobField? newJobfield)
        {
            if (newJobfield == null)
            {
                throw new ArgumentNullException(nameof(newJobfield), "Jobfield object is null");
            }
            JobField? existingJobfield = await GetById(newJobfield.JobFieldId!);
            if (existingJobfield != null)
            {
                throw new ArgumentException("Jobfield ID already exists");
            }
            try
            {
                ValidationService.IsValidJobfield(newJobfield);
                await _repository.AddJobField(newJobfield);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error adding jobfield: {ex.Message}");
            }
        }

        // Delete a jobfield from the database
        public async Task<bool> Delete(int id)
        {
            JobField? jobfield = await GetById(id);
            if (jobfield == null)
            {
                throw new ArgumentException("Jobfield not found");
            }
            try
            {
                await _repository.DeleteJobField(jobfield);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error deleting jobfield with ID {id}: {ex.Message}");
            }
        }

    }
}
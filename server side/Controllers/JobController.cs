using JobSearch.Interfaces;
using JobSearch.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private readonly IJobService jobService;

        public JobController(IJobService jobService)
        {
            this.jobService = jobService;
        }

        //Get all jobs.
        [HttpGet]
        public async Task<List<Job>?> GetAll()
        {
            return await jobService.GetAll();
        }

        //Get job by ID.
        [HttpGet("{id}")]
        public async Task<ActionResult<Job?>> GetById(int id)
        {
            Job? myJob = await jobService.GetById(id);
            if (myJob == null)
            {
                return NotFound();
            }
            return myJob;
        }

        //Add new job.
        [HttpPost]
        public async Task<IActionResult> Add(Job newJob)
        {
            try
            {
                await jobService.Add(newJob);
                return CreatedAtAction(nameof(Add), new { id = newJob.JobId }, newJob);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { errorMessage = ex.Message });
            }
        }
        //Update an existing job.
        [HttpPut]
        public async Task<IActionResult> Update(Job jobToUpdate)
        {
            try
            {
                await jobService.Update(jobToUpdate);
                return NoContent();
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //Delete job by ID.
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await jobService.Delete(id);
                return NoContent();
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
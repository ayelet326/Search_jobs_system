using JobSearch.Interfaces;
using JobSearch.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobfieldController : ControllerBase
    {
        private readonly IJobfieldService jobfieldService;

        public JobfieldController(IJobfieldService jobfieldService)
        {
            this.jobfieldService = jobfieldService;
        }

        //Get all jobfields.
        [HttpGet]
        public async Task<List<JobField>?> GetAll()
        {
            return await jobfieldService.GetAll();
        }

        //Get jobfield by ID.
        [HttpGet("{id}")]
        public async Task<ActionResult<JobField?>> GetById(int id)
        {
            JobField? myJobfield = await jobfieldService.GetById(id);
            if (myJobfield == null)
            {
                return NotFound();
            }
            return myJobfield;
        }

        //Add new jobfield.
        [HttpPost]
        public async Task<IActionResult> Add(JobField newJobfield)
        {
            try
            {
                await jobfieldService.Add(newJobfield);
                return CreatedAtAction(nameof(Add), new { id = newJobfield.JobFieldId }, newJobfield);
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
        //Delete jobfield by ID.
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await jobfieldService.Delete(id);
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
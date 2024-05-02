using JobSearch.Interfaces;
using JobSearch.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        //Get all users.
        [HttpGet]
        public async Task<List<User>?> GetAll()
        {
            return await userService.GetAll();
        }

        //Get user by ID.
        [HttpGet("{id}")]
        public async Task<ActionResult<User?>> GetById(int id)
        {
            User? myUser = await userService.GetById(id);
            if (myUser == null)
            {
                return NotFound();
            }
            return myUser;
        }

        //Add new user.
        [HttpPost]
        public async Task<IActionResult> Add(User newUser)
        {
            try
            {
                await userService.Add(newUser);
                return CreatedAtAction(nameof(Add), new { id = newUser.UserId }, newUser);
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
        //Update an existing user.
        [HttpPut]
        public async Task<IActionResult> Update(User userToUpdate)
        {
            try
            {
                await userService.Update(userToUpdate);
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

        //Delete user by ID.
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await userService.Delete(id);
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
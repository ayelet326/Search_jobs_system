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
    public class UserService : IUserService
    {
        private readonly IRepository _repository;
        public UserService(IRepository repository)
        {
            _repository = repository;
        }

        //Get all users
        public async Task<List<User>?> GetAll()
        {
            return await _repository.GetAllUsers();
        }

        //Get user by id
        public async Task<User?> GetById(int id)
        {
            return await _repository.GetUserById(id);
        }

        // Add a new user to the database
        public async Task<bool> Add(User? newUser)
        {
            if (newUser == null)
            {
                throw new ArgumentNullException(nameof(newUser), "User object is null");
            }
            User? existingUser = await GetById(newUser.UserId!);
            if (existingUser != null)
            {
                throw new ArgumentException("User ID already exists");
            }
            try
            {
                ValidationService.IsValidUser(newUser);
                await _repository.AddUser(newUser);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error adding user: {ex.Message}");
            }
        }

        // Update an existing user in the database
        public async Task<bool> Update(User? newUser)
        {
            if (newUser == null)
            {
                throw new ArgumentNullException(nameof(newUser), "User object is null");
            }
            User? existingUser = await GetById(newUser.UserId!);
            if (existingUser == null)
            {
                throw new ArgumentException("User not found");
            }
            try
            {
                ValidationService.IsValidUser(newUser);
                UpdateUserProperties(existingUser, newUser);
                await _repository.UpdateUser(existingUser);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error updating user: {ex.Message}");
            }

        }

        // Delete a user from the database
        public async Task<bool> Delete(int id)
        {
            User? user = await GetById(id);
            if (user == null)
            {
                throw new ArgumentException("User not found");
            }
            try
            {
                await _repository.DeleteUser(user);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error deleting user with ID {id}: {ex.Message}");
            }
        }

        // Update user properties
        public void UpdateUserProperties(User existingUser, User newUser)
        {
            existingUser.UserName = newUser.UserName ?? existingUser.UserName;
            existingUser.Password = newUser.Password ?? existingUser.Password;
            existingUser.JobFieldId = newUser.JobFieldId ?? existingUser.JobFieldId;
        }
    }
}
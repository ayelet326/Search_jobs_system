using JobSearch.Models;

namespace JobSearch.Interfaces
{
    public interface IUserService
    {
        Task<List<User>?> GetAll();
        Task<bool> Delete(int id);
        Task<bool> Update(User newUser);
        Task<User?> GetById(int id);
        Task<bool> Add(User newUser);
        void UpdateUserProperties(User existingUser, User newUser);
    }
}
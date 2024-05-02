using JobSearch.Data;
using JobSearch.Interfaces;
using JobSearch.Models;
using JobSearch.Validation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSearch.Services;

public class ValidationService
{
    public static bool IsValidUser(User user){
        if (!ValidationFunctions.IsValidString(user.UserName))
            throw new Exception("Invalid user name");
        if (!ValidationFunctions.IsValidString(user.Password))
            throw new Exception("Invalid password");
        return true;
    }
    public static bool IsValidJob(Job job){
        if (!ValidationFunctions.IsValidString(job.JobName))
            throw new Exception("Invalid job name");
        if (!ValidationFunctions.IsValidString(job.Area))
            throw new Exception("Invalid area name");
        job.Requirements?.ForEach(Requirement=>{
            if (!ValidationFunctions.IsValidString(Requirement))
                throw new Exception("Invalid requirement name");
        });
        if (job.HouresScope < 0)
            throw new Exception("Invalid houres scope");
        return true;
    }
    public static bool IsValidJobfield(JobField? jobField){
        if (!ValidationFunctions.IsValidString(jobField?.JobFieldName))
            throw new Exception("Invalid jobField name");
        return true;
    }
}
using System;
using System.Text.RegularExpressions;
namespace JobSearch.Validation;

public class ValidationFunctions
{
    // String validation logic here
    public static bool IsValidString(string? name)
    {
        return !string.IsNullOrWhiteSpace(name) && Regex.IsMatch(name, @"^[a-zA-Z\s]+$");
    }
}
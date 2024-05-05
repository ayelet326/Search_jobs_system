using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobSearchSystem.Migrations
{
    /// <inheritdoc />
    public partial class Add_IdJobsCvsSent_to_user_table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IdJobsCvsSent",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdJobsCvsSent",
                table: "Users");
        }
    }
}

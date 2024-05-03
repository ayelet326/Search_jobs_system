using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobSearchSystem.Migrations
{
    /// <inheritdoc />
    public partial class Add_CVsSentCount_to_table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CVsSentCount",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CVsSentCount",
                table: "Users");
        }
    }
}

using LB_Repository.Context;
using LB_Repository.IRepository;
using LB_Repository.Repository;
using LB_Service.IService.Notepad;
using LB_Service.Service.Notepad;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Writers;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
#region Inject DBContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
#endregion
#region inject Repositories And Services
builder.Services.AddScoped<INotePadRepository, NotePadRepository>();
builder.Services.AddScoped<INotePadService, NotePadService>();
#endregion
#region CORs Setting
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});
#endregion
//builder.Services.AddScoped<>
var app = builder.Build();
//dataContext.Database.Migrate();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

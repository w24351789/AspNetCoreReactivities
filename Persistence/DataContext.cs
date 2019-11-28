using System;
using Domain;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }  //using Domain   here "Values" is be used to db table name 
        public DbSet<Activity> Activities { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
                .HasData(
                    new Value { Id = 1, Name = "Value101"},
                    new Value { Id = 2, Name = "Value102"},
                    new Value { Id = 3, Name = "Value103"}
                );
        }
        
    }
}

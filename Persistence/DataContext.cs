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
    }
}

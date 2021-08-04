using System;
using System.Collections.Generic;

#nullable disable

namespace WebBlog.Models
{
    public partial class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Author { get; set; }
        public string Text { get; set; }
    }
}

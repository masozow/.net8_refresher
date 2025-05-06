using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dtos.comment;
using api.models;

namespace api.mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentToCommentDto(this Comment comment)
        {
            return new CommentDto
            {
                Id = comment.Id,
                Title = comment.Title,
                Content = comment.Content,
                CreatedOn = comment.CreatedOn,
                StockId = comment.StockId
            };
        }
    }
}
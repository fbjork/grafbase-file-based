# File-based schema authoring proposal

```
.
└── grafbase
    ├── mutations
    │   └── create_post.ts     # createPost mutation
    ├── queries
    │   └── posts.ts           # posts query
    └── types
        ├── comment.ts         # Comment type
        └── post
            ├── comments.ts    # Post.comments query
            └── index.ts       # Post type
```

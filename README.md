# File-based schema authoring proposal

```
.
└── grafbase
    ├── mutation
    │   └── create_post.ts     # createPost mutation
    ├── query
    │   └── posts.ts           # posts query
    └── types
        ├── comment.ts         # Comment type
        └── post
            ├── comments.ts    # Post.comments field
            └── index.ts       # Post type
```

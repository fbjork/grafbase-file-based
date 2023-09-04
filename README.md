# File-based schema authoring proposal

```
.
├── README.md
└── grafbase
    ├── interfaces
    │   └── pet.ts              # Pet interface
    ├── scalars
    │   └── foo.ts              # Foo scalar
    └── types
        ├── comment.ts          # Comment type
        ├── mutation
        │   └── create_post.ts  # createPost mutation
        ├── post
        │   ├── comments.ts     # Post.comments field
        │   └── index.ts        # Post type
        └── query
            └── posts.ts        # posts query
```

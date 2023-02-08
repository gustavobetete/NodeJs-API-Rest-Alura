openapi: 3.0.3
info:
  title: Swagger LibraryNodeJs - OpenAPI 3.0
  description: |-
    Documentação do projeto do curso da alura NodeJs com Express e mongoDB (atlas)
  termsOfService: http://swagger.io/terms/
  contact:
    email: gustavobetete@hotmail.com
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.11
externalDocs:
  description: Find out more about Swagger
  url: http://swagger.io
servers:
  - url: https://petstore3.swagger.io/api/v3
tags:
  - name: Livros
    description: EndPoints relacionados a livros.
  - name: Autores
    description: EndPoints relacionados a autores.
paths:
  /livros:
    post:
      tags:
        - Livros
      summary: Adicionar um novo livro
      description: adicionando um novo livro
      operationId: createBook
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Livros'
        required: true
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LivrosResponse'          
        '405':
          description: Invalid input
      security:
        - petstore_auth:
            - write:books
            - read:books
    get:
      tags:
        - Livros
      summary: Tras todos os livros
      description: Lista todos os livros
      operationId: getBooks
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/LivrosGet'          
        '400':
          description: Invalid status value
      security:
        - petstore_auth:
            - write:books
            - read:books        
  /livros/{id}:          
    put:
      tags:
        - Livros
      summary: Update livro
      description: Update livro existente por id
      operationId: updatePet
      parameters:
        - name: id
          in: path
          description: ID do livro
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        description: Update livro existente
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Livros'
        required: true
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LivrosUpdate'          
        '400':
          description: Invalid ID supplied
        '404':
          description: book not found
        '405':
          description: Validation exception
      security:
        - petstore_auth:
            - write:books
            - read:books
    get:
      tags:
        - Livros
      summary: Tras apenas um livro
      description: retorna um livro por id
      operationId: getBookById
      parameters:
        - name: id
          in: path
          description: ID do livro
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LivrosGetById'          
        '400':
          description: Invalid ID supplied
        '404':
          description: Pet not found
      security:
        - api_key: []
        - petstore_auth:
            - write:books
            - read:books 
    delete:
      tags:
        - Livros
      summary: Delete um livro
      description: delete um livro
      operationId: deleteBook
      parameters:
        - name: id
          in: path
          description: ID do livro
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LivrosDelete' 
        '400':
          description: Invalid book value
      security:
        - petstore_auth:
            - write:books
            - read:books   
  /livros/busca:
    get:
      tags:
        - Livros
      summary: Tras o livro buscando pelo nome da editora
      description: Lista o livro buscando pelo nome da editora
      operationId: getBooksByEditors
      parameters:
        - name: editora
          in: query
          description: nome da editora
          required: false
          schema:
            type: string
            example: 'Nome da editora'
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/LivrosGetByEditors'          
        '400':
          description: Invalid status value
      security:
        - petstore_auth:
            - write:books
            - read:books    
  /autores:
    post:
      tags:
        - Autores
      summary: Adicionar um novo autor
      description: adicionando um novo autor
      operationId: createAuth
      requestBody:
        description: Create a new auth in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Autores'
        required: true
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AutoresResponse'          
        '405':
          description: Invalid input
      security:
        - petstore_auth:
            - write:auths
            - read:auths
    get:
      tags:
        - Autores
      summary: Tras todos os autores
      description: Lista todos os autores
      operationId: getAuth
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/AutoresGet'          
        '400':
          description: Invalid status value
      security:
        - petstore_auth:
            - write:auths
            - read:auths        
  /autores/{id}:          
    put:
      tags:
        - Autores
      summary: Update autor
      description: Update autor existente por id
      operationId: updateAuth
      parameters:
        - name: id
          in: path
          description: ID do autor
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        description: Update autor existente
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Autores'
        required: true
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AutoresUpdate'          
        '400':
          description: Invalid ID supplied
        '404':
          description: auth not found
        '405':
          description: Validation exception
      security:
        - petstore_auth:
            - write:auths
            - read:auths
    get:
      tags:
        - Autores
      summary: Tras apenas um autor
      description: retorna um autor por id
      operationId: getAuthById
      parameters:
        - name: id
          in: path
          description: ID do autor
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AutoresGetById'          
        '400':
          description: Invalid ID supplied
        '404':
          description: Auth not found
      security:
        - api_key: []
        - petstore_auth:
            - write:auths
            - read:auths 
    delete:
      tags:
        - Autores
      summary: Delete um autor
      description: delete um autor
      operationId: deleteAuth
      parameters:
        - name: id
          in: path
          description: ID do autor
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AutorDelete' 
        '400':
          description: Invalid book value
      security:
        - petstore_auth:
            - write:auths
            - read:auths                 
components:
  schemas:
    Livros:
      required:
        - titulo
        - autor
        - editora 
        - numeroPaginas
      type: object
      properties:
        titulo:
          type: string
          example: 'Titulo do livro'
        autor:
          $ref: '#/components/schemas/Autor'   
        editora:
          type: string
          example: 'Editora do livro'  
        numeroPaginas:
          type: number
          example: 198    
    Autor:
      type: object
      properties:
        id:
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        nome:
          type: string
          example: 'Nome do autor'
        nacionalidade:
          type: string
          example: 'Nacionalidade do autor'    
    LivrosResponse:
      type: object
      properties:
        titulo:
          type: string
          example: 'Titulo do livro'
        autor:
          $ref: '#/components/schemas/Autor'   
        editora:
          type: string
          example: 'Editora do livro'  
        numeroPaginas:
          type: number
          example: 198  
        _id:
          type: string
          example: '63e301f0370c38a8a683a82c'
        __v:
          type: number
          example: 0
    LivrosUpdate:
      type: object
      properties: 
        message:
          type: string
          example: "Livro atualizado com sucesso"
    LivrosGet:     
      properties:
        id: 
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        titulo:
          type: string
          example: 'Titulo do livro'
        autor:
          $ref: '#/components/schemas/Autor'   
        editora:
          type: string
          example: 'Editora do livro'  
        numeroPaginas:
          type: number
          example: 198 
    LivrosGetById:
      properties:
        id: 
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        titulo:
          type: string
          example: 'Titulo do livro'
        autor:
          $ref: '#/components/schemas/AutorGetById'   
        editora:
          type: string
          example: 'Editora do livro'  
        numeroPaginas:
          type: number
          example: 198 
    AutorGetById:
      type: object
      properties:
        id:
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        nome:
          type: string
          example: 'Nome do autor'
    LivrosDelete:
      type: object
      properties: 
        message:
          type: string
          example: "Livro deletado com sucesso" 
    Autores:
      required:
        - nome
        - nacionalidade
      type: object
      properties:
        nome:
          type: string
          example: 'Nome do autor'
        nacionalidade:
          type: string
          example: 'Nacionalidade do autor'  
    AutoresResponse:
      type: object
      properties:
        _id:
          type: string
          example: '63e301f0370c38a8a683a82c'
        nome:
          type: string
          example: 'Nome do autor'
        nacionalidade:
          type: string
          example: 'Nacionalidade do autor'   
    AutoresUpdate:
      type: object
      properties: 
        message:
          type: string
          example: "Autor atualizado com sucesso"
    AutoresGet:     
      properties:
        id: 
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        nome:
          type: string
          example: 'Nome do autor'
        nacionalidade:
          type: string
          example: 'Nacionalidade do autor' 
    AutoresGetById:
      type: object
      properties:
        id:
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        nome:
          type: string
          example: 'Nome do autor'
        nacionalidade:
          type: string
          example: 'Nacionalidade do autor' 
    AutorDelete:
      type: object
      properties: 
        message:
          type: string
          example: "Autor deletado com sucesso"   
    LivrosGetByEditors: 
      properties:
        id: 
          type: string
          example: '63e2e33d0063e79ce88d0a60'
        titulo:
          type: string
          example: 'Titulo do livro'
        autor:
          type: string
          example: '63e307e0235268da377c3c4f'
        editora:
          type: string
          example: 'Nome da editora'  
        numeroPaginas:
          type: number
          example: 198 
  securitySchemes:
    petstore_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://petstore3.swagger.io/oauth/authorize
          scopes:
            write:pets: modify pets in your account
            read:pets: read your pets
    api_key:
      type: apiKey
      name: api_key
      in: header
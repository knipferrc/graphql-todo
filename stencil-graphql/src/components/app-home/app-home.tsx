import { Component, State } from '@stencil/core'
import { execute } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @State()
  public todos: any[]
  @State()
  public loading: boolean = false

  componentDidLoad() {
    this.loading = true
    const uri = 'http://localhost:5000/graphql'
    const link = new HttpLink({ uri })

    const operation = {
      query: gql`
        query {
          todos {
            key
            value
          }
        }
      `
    }

    execute(link, operation).subscribe({
      next: data => (this.todos = data.data.todos),
      error: error => console.log(`received error ${error}`),
      complete: () => (this.loading = false)
    })
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Todos</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        {!this.loading && this.todos.map(todo => <div>{todo.value}</div>)}
      </ion-content>
    ]
  }
}

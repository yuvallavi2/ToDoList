import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { TodoListHad } from "./TodoList/TodoListHad-Web/TodoListHad.component";

import { ToDoList } from "./TodoList/TodoListHad-Web/ToDoList/ToDoList.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		TodoListHad: TodoListHad,

		ToDoList: ToDoList
	};

	static ComponentArray: any[] = [TodoListHad, ToDoList];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}

	public getTitle(): string {
		return "ToDoList";
	}
}

import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-ToDoList",
	providers: [TaskMagicService],
	styleUrls: ["./ToDoList.component.css"],
	templateUrl: "./ToDoList.component.html"
})
export class ToDoList extends BaseTaskMagicComponent {}

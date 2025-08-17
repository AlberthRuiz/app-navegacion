export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    completed: boolean
}


export const mockTasks: Task[] = [
    {
      id: '1',
      title: 'Revisar correos',
      description: 'Revisar y responder correos importantes',
      dueDate: '2024-01-15',
      priority: 'Alta',
      completed: false
    },
    {
      id: '2',
      title: 'Llamar al cliente',
      description: 'Seguimiento del proyecto',
      dueDate: '2024-01-14',
      priority: 'Media',
      completed: true
    },
    {
      id: '3',
      title: 'Preparar presentación',
      description: 'Presentación para la reunión del viernes',
      dueDate: '2024-01-16',
      priority: 'Alta',
      completed: false
    },
    {
      id: '4',
      title: 'Actualizar documentos',
      description: 'Actualizar documentación del proyecto',
      dueDate: '2024-01-17',
      priority: 'Baja',
      completed: false
    }
  ];
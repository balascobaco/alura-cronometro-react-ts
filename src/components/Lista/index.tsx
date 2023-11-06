import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefa';

interface Props {
	tarefas: ITarefa[];
	handleSelecionar: (tarefaSelecionada: ITarefa) => void;
	deleteTarefa: () => void;
}

function Lista({ tarefas, handleSelecionar, deleteTarefa }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2> Estudos do dia </h2>
			<ul>
				{tarefas.map((item) => (
					<Item
						handleSelecionar={handleSelecionar}
						deleteTarefa={deleteTarefa}
						key={item.id}
						{...item}
					/>
				))}
			</ul>
		</aside>
	);
}

export default Lista;

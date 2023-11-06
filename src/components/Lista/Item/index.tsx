import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';
import { BiTrash } from 'react-icons/bi';

interface Props extends ITarefa {
	handleSelecionar: (tarefaSelecionada: ITarefa) => void;
	deleteTarefa: () => void;
}

export default function Item({
	tarefa,
	tempo,
	selecionado,
	completado,
	id,
	handleSelecionar,
	deleteTarefa,
}: Props) {
	return (
		<li
			className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${
				completado ? style.itemCompletado : ''
			}`}
			onClick={() =>
				!completado &&
				handleSelecionar({
					tarefa,
					tempo,
					selecionado,
					completado,
					id,
				})
			}
		>
			<div className={style.tituloTarefa}>
				<h3>{tarefa}</h3>
				{!completado && selecionado && (
					<BiTrash
						className={style.delete}
						onClick={() => {
							deleteTarefa();
						}}
					/>
				)}
			</div>

			<span>{tempo}</span>
			{completado && (
				<span
					className={style.concluido}
					aria-label="tarefa completada"
				></span>
			)}
		</li>
	);
}

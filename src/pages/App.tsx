import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	function handleSelecionar(tarefaSelecionada: ITarefa) {
		setSelecionado(tarefaSelecionada);

		tarefaSelecionada.selecionado === false
			? setTarefas((tarefasAnteriores) =>
					tarefasAnteriores.map((tarefa) => ({
						...tarefa,
						selecionado: tarefaSelecionada.id === tarefa.id ? true : false,
					}))
			  )
			: setTarefas((tarefasAnteriores) =>
					tarefasAnteriores.map((tarefa) => ({
						...tarefa,
						selecionado: false,
					}))
			  );
	}

	function finalizarTarefa() {
		if (selecionado) {
			setSelecionado(undefined);
			setTarefas((tarefasAnteriores) =>
				tarefasAnteriores.map((tarefa) => {
					if (tarefa.id === selecionado.id) {
						return { ...tarefa, selecionado: false, completado: true };
					}
					return tarefa;
				})
			);
		}
	}

	function deleteTarefa() {
		if (selecionado) {
			setTarefas(tarefas.filter((tarefa) => tarefa.id !== selecionado.id));
		}
	}

	return (
		<div className={style.AppStyle}>
			<Formulario setTarefas={setTarefas} />
			<Lista
				tarefas={tarefas}
				handleSelecionar={handleSelecionar}
				deleteTarefa={deleteTarefa}
			/>
			<Cronometro
				selecionado={selecionado}
				finalizarTarefa={finalizarTarefa}
			/>
		</div>
	);
}

export default App;

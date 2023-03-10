import { FlatList } from 'react-native';
import GoalItem from './GoalItem';

function FlatComp(props) {

    function deleteGoal() {
        console.log('DELETED');
    }

    return (
        <FlatList /** Flat list lavora sulle liste in maniera "Pigra" cioè, carica gli elementi nel momento in cui si scrolla e non tutti insieme come  ScrollView */
            data={props.listGoals}/**Gli elementi che accetta la flatList sono DATA che sarebbe la lista da inserire */
            renderItem={(itemData) => { /** renderItem è la seconda proprietà obbligatoria da aggiungere composta da : elemento singolo (itemData)*/
                /**e dal Return che non è altro che la parte "visiva" */
                return <GoalItem text={itemData.item.text} onDeleteGoal={deleteGoal}/>;/**E' in nuovo componente aggiunto ..come proprietà possiamo mettetre un nome a caso , in questo caso "text" che verrà richiamato nella props del componete */
                /**Gli elementi si recuperano con : nome del singono elemento (itemData) .item (nome STRANDARD) .nome varibile di come è stato dichiaranto nella lista, in questo caso "text" */
            }}
            keyExtractor={(item, index) => {
                return (item.id)
            }}
            alwaysBounceVertical={false}/**Non obbligatorio, serve per non far "rimbalzare" la lista */
        />
    );
}

export default FlatComp;
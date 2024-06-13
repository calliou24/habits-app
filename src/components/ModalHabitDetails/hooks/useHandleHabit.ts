import {useCallback, useContext} from "preact/hooks";
import {isEmpty} from "../../../utils/validations";
import {HabitsContext} from "../../../context/HabitsContext";
import {
    habitRequiredFields,
    newHabitInitialValue,
} from "../../../utils/constants";
import {isSomeFieldEmpty} from "../../../functions/validateRequiredFIelds";
import {generateUniqueId} from "../../../utils/generateUniqueId";

export default function useHandleHabit() {
    const {updateEvent, newHabit, habits} = useContext(HabitsContext);

    const handleChangeNewHabit = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const property = target?.name;

        if (isEmpty(property)) return;

        const value = target?.value;
        updateEvent({
            newHabit: {
                ...newHabit,
                [property]: value,
            },
        });
    };

    const handleCreateHabit = useCallback(() => {
        //req
        if (
            isSomeFieldEmpty({
                fields: habitRequiredFields,
                toValidate: newHabit,
            })
        )
            return console.error("error empty fields");

        updateEvent({
            habits: [{...newHabit, id: generateUniqueId()}, ...habits],
            showAddHabit: false,
            newHabit: newHabitInitialValue,
        });
    }, [habits, newHabit]);

    const handleUpdateHabit = useCallback(
        (id: number) => {
            if (
                isSomeFieldEmpty({fields: habitRequiredFields, toValidate: newHabit})
            )
                return;

            const finalHabit = {
                ...newHabit,
                id,
            };
            const newHabitsList = habits?.map((habit) =>
                habit?.id === id ? finalHabit : habit
            );
            updateEvent({
                habitToEdit: finalHabit,
                habits: newHabitsList,
                showAddHabit: false,
            });
        },
        [newHabit, habits]
    );

    return {handleChangeNewHabit, handleCreateHabit, handleUpdateHabit};
}

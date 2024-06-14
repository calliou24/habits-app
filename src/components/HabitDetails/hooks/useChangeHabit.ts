//hooks
import {useCallback, useContext} from "preact/hooks";
//types
import {habitType} from "../../../types/habit";
//functions
import {handleChangeHabitProperty} from "../../../functions/changeHabit";
//context
import {HabitsContext} from "../../../context/HabitsContext";
//validations
//functions


export const useChangeHabit = (habit: habitType | null) => {
    const {habits, updateEvent} = useContext(HabitsContext);

    const handleChangeHabit = useCallback(
        (newValues: { property: string; value: any }[]) => {
            const newHabit: habitType | undefined = handleChangeHabitProperty({
                id: habit?.id,
                newValues,
                habits: habits,
            });

            if (newHabit === undefined) return;

            const habitsList: habitType[] = habits?.map((habitItem) =>
                habitItem?.id === habit?.id ? newHabit : habitItem
            );
            updateEvent({habitToEdit: newHabit, habits: habitsList});
        },
        [habits, habit?.id]
    );


    return {};
};

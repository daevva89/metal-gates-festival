import { createSlice, ThunkAction, Action } from '@reduxjs/toolkit';
import emailjs from 'emailjs-com';

interface ContactState {
    sending: boolean;
    sent: boolean;
    error: string | null;
}

const initialState: ContactState = {
    sending: false,
    sent: false,
    error: null,
};

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        sendEmail: (state) => {
            state.sending = true;
        },
        emailSent: (state) => {
            state.sending = false;
            state.sent = true;
        },
        emailError: (state, action) => {
            state.sending = false;
            state.error = action.payload;
        },
    },
});

export const { sendEmail, emailSent, emailError } = contactSlice.actions;

export const sendEmailAsync = (
    serviceID: string,
    templateID: string,
    formData: { from_name: string; reply_to: string; subject: string; message: string },
    userID: string,
): ThunkAction<Promise<void>, {}, unknown, Action<string>> => async (dispatch) => {
    dispatch(sendEmail());
    try {
        await emailjs.send(serviceID, templateID, formData, userID);
        dispatch(emailSent());
    } catch (error: any) {
        console.log('Email error:', error);
        dispatch(emailError(error?.text || 'An error occurred while sending the email.'));
        throw error;
    }
};

export default contactSlice.reducer;
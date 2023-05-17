import {render, screen} from '@testing-library/react'
import React from 'react';

import MessageStatus from "./MessageStatus";

describe('message status component tests', () => {

    test('render pending status icon',  () => {
        const {getByTestId} = render(<MessageStatus status={"pending"}/>)
        expect(getByTestId('message-status-icon-pending')).toBeInTheDocument();
    })
    test('render sent status icon',  () => {
        const {getByTestId} = render(<MessageStatus status={"sent"}/>)
        expect(getByTestId('message-status-icon-sent')).toBeInTheDocument();
    })
    test('render delivered status icon',  () => {
        const {getByTestId} = render(<MessageStatus status={"delivered"}/>)
        expect(getByTestId('message-status-icon-delivered')).toBeInTheDocument();
    })
    test('render failed status icon',  () => {
        const {getByTestId} = render(<MessageStatus status={"failed"}/>)
        expect(getByTestId('message-status-icon-failed')).toBeInTheDocument();
    })
    test('render read status icon',  () => {
        const {getByTestId} = render(<MessageStatus status={"read"}/>)
        expect(getByTestId('message-status-icon-read')).toBeInTheDocument();
    })

})


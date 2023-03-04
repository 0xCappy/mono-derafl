/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TicketRefund } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TicketRefundUpdateFormInputValues = {
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    raffleNonce?: number;
    ethAmount?: number;
    refundee?: string;
    chainId?: string;
};
export declare type TicketRefundUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    raffleNonce?: ValidationFunction<number>;
    ethAmount?: ValidationFunction<number>;
    refundee?: ValidationFunction<string>;
    chainId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketRefundUpdateFormOverridesProps = {
    TicketRefundUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    raffleNonce?: PrimitiveOverrideProps<TextFieldProps>;
    ethAmount?: PrimitiveOverrideProps<TextFieldProps>;
    refundee?: PrimitiveOverrideProps<TextFieldProps>;
    chainId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketRefundUpdateFormProps = React.PropsWithChildren<{
    overrides?: TicketRefundUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ticketRefund?: TicketRefund;
    onSubmit?: (fields: TicketRefundUpdateFormInputValues) => TicketRefundUpdateFormInputValues;
    onSuccess?: (fields: TicketRefundUpdateFormInputValues) => void;
    onError?: (fields: TicketRefundUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketRefundUpdateFormInputValues) => TicketRefundUpdateFormInputValues;
    onValidate?: TicketRefundUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TicketRefundUpdateForm(props: TicketRefundUpdateFormProps): React.ReactElement;

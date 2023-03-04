/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TicketRefundCreateFormInputValues = {
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    raffleNonce?: number;
    ethAmount?: number;
    refundee?: string;
    chainId?: string;
};
export declare type TicketRefundCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    raffleNonce?: ValidationFunction<number>;
    ethAmount?: ValidationFunction<number>;
    refundee?: ValidationFunction<string>;
    chainId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketRefundCreateFormOverridesProps = {
    TicketRefundCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    raffleNonce?: PrimitiveOverrideProps<TextFieldProps>;
    ethAmount?: PrimitiveOverrideProps<TextFieldProps>;
    refundee?: PrimitiveOverrideProps<TextFieldProps>;
    chainId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketRefundCreateFormProps = React.PropsWithChildren<{
    overrides?: TicketRefundCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TicketRefundCreateFormInputValues) => TicketRefundCreateFormInputValues;
    onSuccess?: (fields: TicketRefundCreateFormInputValues) => void;
    onError?: (fields: TicketRefundCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketRefundCreateFormInputValues) => TicketRefundCreateFormInputValues;
    onValidate?: TicketRefundCreateFormValidationValues;
} & React.CSSProperties>;
export default function TicketRefundCreateForm(props: TicketRefundCreateFormProps): React.ReactElement;

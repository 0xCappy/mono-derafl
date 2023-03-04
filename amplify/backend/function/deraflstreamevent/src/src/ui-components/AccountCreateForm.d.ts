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
export declare type AccountCreateFormInputValues = {
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    address?: string;
    rafflesCreated?: number;
    rafflesWon?: number;
    rafflesEntered?: number;
    ticketsBought?: number;
};
export declare type AccountCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    rafflesCreated?: ValidationFunction<number>;
    rafflesWon?: ValidationFunction<number>;
    rafflesEntered?: ValidationFunction<number>;
    ticketsBought?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCreateFormOverridesProps = {
    AccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    rafflesCreated?: PrimitiveOverrideProps<TextFieldProps>;
    rafflesWon?: PrimitiveOverrideProps<TextFieldProps>;
    rafflesEntered?: PrimitiveOverrideProps<TextFieldProps>;
    ticketsBought?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onSuccess?: (fields: AccountCreateFormInputValues) => void;
    onError?: (fields: AccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onValidate?: AccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountCreateForm(props: AccountCreateFormProps): React.ReactElement;

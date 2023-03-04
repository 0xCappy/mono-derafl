/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Transaction } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransactionUpdateFormInputValues = {
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    raffleNonce?: number;
    date?: string;
    eventType?: number;
    hash?: string;
    chainId?: string;
};
export declare type TransactionUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    raffleNonce?: ValidationFunction<number>;
    date?: ValidationFunction<string>;
    eventType?: ValidationFunction<number>;
    hash?: ValidationFunction<string>;
    chainId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransactionUpdateFormOverridesProps = {
    TransactionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    raffleNonce?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    eventType?: PrimitiveOverrideProps<TextFieldProps>;
    hash?: PrimitiveOverrideProps<TextFieldProps>;
    chainId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransactionUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransactionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transaction?: Transaction;
    onSubmit?: (fields: TransactionUpdateFormInputValues) => TransactionUpdateFormInputValues;
    onSuccess?: (fields: TransactionUpdateFormInputValues) => void;
    onError?: (fields: TransactionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransactionUpdateFormInputValues) => TransactionUpdateFormInputValues;
    onValidate?: TransactionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransactionUpdateForm(props: TransactionUpdateFormProps): React.ReactElement;

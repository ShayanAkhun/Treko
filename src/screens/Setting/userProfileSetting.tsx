import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Button, } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IconLibrary } from '../../components/Icons/IconsLibarary';

interface IProps {}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('write your full name'),
    address: Yup.string().required('please add your address'),
    qualification: Yup.string().required('please add your qualification'),
    gender: Yup.string().optional(),
    experience: Yup.string().required('add your experience'),
    specialization: Yup.string().required('add your specialization'),
    price: Yup.number().required('add price'),
    availableTimings: Yup.string().required('enter available timings'),
    availableAtClinics: Yup.string().required('add your available time at clinic'),
    email: Yup.string().required('add your contact details'),
    phone: Yup.number().required('add your contact details'),
});

export const UserProfileSetting: React.FC<IProps> = () => {


    

    const initialValues = {
        name:  '',
        address: '',
        qualification: '',
        experience: '',
        specialization: '',
        availableTimings: '',
        availableAtClinics: '',
        email:  '',
        gender: '',
    };

    const onSubmit = (values: any) => {
        console.log({ values });
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.profileContainer}>
                <View style={styles.iconContainer}>
                    <IconLibrary.Octicons name="device-camera"  size={35} color="#000000" />
                    <Text>Add Profile</Text>
                </View>
            </View>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ errors, handleChange, values, handleSubmit }) => (
                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your full name"
                                value={values.name}
                                onChangeText={handleChange('name')}
                            />
                            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter address"
                                value={values.address}
                                onChangeText={handleChange('address')}
                            />
                            {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Qualification</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Add qualification"
                                value={values.qualification}
                                onChangeText={handleChange('qualification')}
                            />
                            {errors.qualification && <Text style={styles.errorText}>{errors.qualification}</Text>}
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Experience</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your experience"
                                value={values.experience}
                                onChangeText={handleChange('experience')}
                            />
                            {errors.experience && <Text style={styles.errorText}>{errors.experience}</Text>}
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Specialization</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter specialization"
                                value={values.specialization}
                                onChangeText={handleChange('specialization')}
                            />
                            {errors.specialization && <Text style={styles.errorText}>{errors.specialization}</Text>}
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Gender</Text>
                            
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Contact Details</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email address"
                                value={values.email}
                                onChangeText={handleChange('email')}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter phone number"
                                value={''}
                                onChangeText={handleChange('phone')}
                            />
                            <Text style={styles.errorText}></Text>
                        </View>
                        <Button title="Save" onPress={() => handleSubmit()} />
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    profileContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        width: 160,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 80,
    },
    formContainer: {
        padding: 16,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        borderRadius: 4,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        maxWidth: 300,
    },
});

export default UserProfileSetting;

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8bde20'
    },

    header: {
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 12,
    },

    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1f2937',
    },

    subtitle:{
        marginTop: 6,
        fontSize: 18,
        color: '#6b7280'
    },

    inputContainer:{
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 28,
        paddingVertical: 12,
    },

    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 14,
        fontSize: 16,
        color: '#111827',
        borderWidth: 1,
        borderColor: '#dbe2ea',
    },

    addButton:{
        backgroundColor: '#2563eb',
        borderRadius: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addButtonText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
    },

    summaryContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        paddingVertical: 8,
        gap: 18,
    },

    summaryCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingVertical: 18,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },

    summaryNumber: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
    },

    summarylabel: {
        marginTop: 4,
        fontSize: 13,
        color: '#111827',
    },
    emptyState:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
    },
    emptyTitle:{
        fontSize: 18,
        fontWeight: '700',
        color: '374151'
    },
    emptyText: {
        marginTop: 8,
        fontSize: 15,
        color: '#6b7280',
        textAlign: 'center'
    },
    listContent:{
        padding: 20,
        paddingBottom: 40,
        flexGrow: 1,
    },
    taskCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    taskContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    checkCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#9ca3af',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkCircleDone: {
        backgroundColor: '#16a34a',
        borderColor: '#16a34a',
    },
    checkIcon: {
        color: '#fff',
        fontWeight: '700',
    },
    taskText: {
        flex: 1,
        fontSize: 16,
        color: '#111827',
    },
    taskTextDone: {
        textDecorationLine: 'line-through',
        color: '#6b7280',
    },
    deleteButton: {
        marginLeft: 12,
        backgroundColor: '#fee2e2',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    deleteButtonText: {
        color: '#b91c1c',
        fontSize: 13,
        fontWeight: '600',
    },
});

export default styles;